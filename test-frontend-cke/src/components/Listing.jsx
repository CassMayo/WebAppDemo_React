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
                `http://localhost:5050/record/${params.id.toString()}`
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
                response = await fetch("http://localhost:5050/listings", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(listing)
                })
            } else {
                response = await fetch(`http://localhost:5050/listings/${params.id}`,
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
            console.error('A problem has occured with your fetch operatrion: ', error)
        } finally {
            setForm({ title: "", price: "", credits: "" })
            navigate("/")
        }
    }

    return (
        <div>
            <h3>Update</h3>
            <form onSubmit={onSubmit}>
                <input type="text" name="title" placeholder="title" value={form.name} onChange={(e) => updateForm({ name: e.target.value })} />
                <input type="text" name="price" placeholder="price" value={form.price} onChange={(e) => updateForm({ price: e.target.value })} />
                <input type="text" name="credits" placeholder="credits" value={form.credits} onChange={(e) => updateForm({ credits: e.target.value })} />
                <input type="submit" value="Save" />
            </form>
        </div>
    )
}