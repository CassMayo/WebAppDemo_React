import { useEffect, useState } from "react"
import './CreditQualityEvaluation.css'


function calculateScore(creditQualityData) {
  let rawScore = 0;

  if (creditQualityData.politicalRisk === "Low") {
    rawScore += 100;
  } else if (creditQualityData.politicalRisk === "Medium") {
    rawScore += 50;
  }

  if (creditQualityData.issuerOwnsLand) {
    rawScore += 100;
  }

  if (creditQualityData.legalRisk === "Low") {
    rawScore += 100;
  } else if (creditQualityData.legalRisk === "Medium") {
    rawScore += 50;
  }

  if (creditQualityData.geographicalRisk === "Low") {
    rawScore += 100;
  } else if (creditQualityData.geographicalRisk === "Medium") {
    rawScore += 50;
  }

  if (creditQualityData.climateProjections === "Fair") {
    rawScore += 100;
  } else if (creditQualityData.climateProjections === "Concerning") {
    rawScore += 50;
  }

  if (creditQualityData.independentVerifiers.length > 0) {
    rawScore += 100;
  }

  return rawScore
}

export default function CreditQualityEvaluation({ creditQualityData }) {



  const [scoreData, setScoreData] = useState(0)

  useEffect(() => {
    setScoreData((calculateScore(creditQualityData) / 6).toFixed(0))

  }, [])

  const scoreDiv = {

    height: "20px",
    width: '100%',
    backgroundColor: 'whitesmoke',
    border: "1px solid lightgray",
    borderRadius: "40px",
  }

  const score = {
    height: '100%',
    width: `${scoreData}%`,
    backgroundColor: 'green',
    borderRadius: "40px",
    textAlign: 'right',
    transition: 'width 1s ease-in-out',
  }




  return (
    <div className="creditQualityEvaluationCard">

      <h3 className="scoreTitle"> Carbon Credit Integrity Score </h3>

      <ul>
        <li> <div className={`leftSideBox ${creditQualityData.issuerOwnsLand ? "isGreen" : "isRed"}`}></div> {creditQualityData.issuerOwnsLand ? "Issuer owns land" : "Issuer doesnt own land"}</li>
        <li> <div className={`leftSideBox ${creditQualityData.politicalRisk == "Low" ? "isGreen" : creditQualityData.PoliticalRisk == "Medium" ? "isYellow" : "isRed"}`}></div>Political Risk: {creditQualityData.PoliticalRisk}</li>
        <li> <div className={`leftSideBox ${creditQualityData.legalRisk == "Low" ? "isGreen" : creditQualityData.legalRisk == "Medium" ? "isYellow" : "isRed"}`}></div>Legal Risk: {creditQualityData.legalRisk}</li>
        <li> <div className={`leftSideBox ${creditQualityData.climateProjections == "Fair" ? "isGreen" : creditQualityData.climateProjections == "Concerning" ? "isYellow" : "isRed"}`}></div>Climate Projections: {creditQualityData.climateProjections}</li>
        <li> Owner Structure: {creditQualityData.ownerStructure}</li>
      </ul>


      <div className="scoreData">
        <div style={scoreDiv}>
          <div style={score}></div>
        </div>
        <p className="scoreText">{scoreData}%</p>
      </div>

      <div className="verifiedBox">
        <p className="verifiedBy">Credits independently verified by:</p>
        <div className="logosDiv">
          <img className="standardLogo" src="/assets/logos/GS_Logo_Primary.png" alt="" />
          <div className="moreInfo">
            <i class="fa-solid fa-circle-info"></i>
          </div>
        </div>
      </div>


    </div>
  )


}

