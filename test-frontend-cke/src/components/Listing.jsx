import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"

export default function Listing() {
    const [form, setForm] = useState({
        title: "",
        price: "",
        credits: "",
    })

    const [isNew, setIsNew] = useState(true)
    const params = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        async function fetchData() {
            const id = params.id?.toString() || undefined
            if (!id) return
            setIsNew(false)
            const response = await fetch(
                `http://localhost:5050/portfolio/${id}`
            )
            if (!response.ok) {
                const msg = `An error has occured: ${response.statusText}`
                console.error(msg)
                return
            }

            const listing = await response.json()
            if (!listing) {
                console.warn(`Listing with id: ${id} not found`)
                navigate("/")
                return
            }
            setForm(listing)
        }
        fetchData()
        return
    }, [params.id, navigate])

    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value }
        })
    }

    async function onSubmit(e) {
        e.preventDefault();
        const listing = { ...form }

        try {

            let response

            if (isNew) {
                response = await fetch("http://localhost:5050/portfolio", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(listing)
                })
            } else {
                response = await fetch(`http://localhost:5050/portfolio/${params.id}`,
                    {
                        method: "PATCH",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(listing)
                    }
                )
            }

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }
        } catch (error) {
            console.error('A problem has occured with your fetch operation: ', error)
        } finally {
            setForm({             
                title: "",
                price: "",
                credits: "",
                type: "",
                imageUrl: "",
                imageAlt: "",
                location: "",
                description: ""
             })
            navigate("/")
        }
    }

    return (
        <div>
            <h3>Update</h3>
            <form onSubmit={onSubmit}>
                <input type="text" name="title" placeholder="title" value={form.title} onChange={(e) => updateForm({ title: e.target.value })} />
                <input type="text" name="price" placeholder="price" value={form.price} onChange={(e) => updateForm({ price: e.target.value })} />
                <input type="text" name="credits" placeholder="credits" value={form.credits} onChange={(e) => updateForm({ credits: e.target.value })} />
                <input type="text" name="type" placeholder="type" value={form.type} onChange={(e) => updateForm({ type: e.target.value })} />
                <input type="text" name="imageUrl" placeholder="imageUrl" value={form.imageUrl} onChange={(e) => updateForm({ imageUrl: e.target.value })} />
                <input type="text" name="imageAlt" placeholder="imageAlt" value={form.imageAlt} onChange={(e) => updateForm({ imageAlt: e.target.value })} />
                <input type="text" name="location" placeholder="location" value={form.location} onChange={(e) => updateForm({ location: e.target.value })} />
                <input type="text" name="description" placeholder="description" value={form.description} onChange={(e) => updateForm({ description: e.target.value })} />
                <input type="submit" value="Save" />
            </form>
        </div>
    )
}