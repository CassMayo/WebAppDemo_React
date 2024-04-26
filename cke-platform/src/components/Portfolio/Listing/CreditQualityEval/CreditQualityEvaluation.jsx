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

  if (creditQualityData.methodOfCapture == "Forrestry"){
    rawScore += 100
  } else if (creditQualityData.methodOfCapture == "Algae"){
    rawScore += 50
  } 

  if (creditQualityData.permanence == "High"){
    rawScore += 100
  } else if (creditQualityData.permanence == "Medium"){
    rawScore += 50
  }


  return rawScore
}





export default function CreditQualityEvaluation({ creditQualityData }) {

  const [scoreData, setScoreData] = useState(0)

  useEffect(() => {
    setScoreData((calculateScore(creditQualityData) / 8).toFixed(0))

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
        <li> <div className={`leftSideBox ${creditQualityData.politicalRisk == "Low" ? "isGreen" : creditQualityData.politicalRisk == "Medium" ? "isYellow" : "isRed"}`}></div>Political Risk: {creditQualityData.politicalRisk}</li>
        <li> <div className={`leftSideBox ${creditQualityData.legalRisk == "Low" ? "isGreen" : creditQualityData.legalRisk == "Medium" ? "isYellow" : "isRed"}`}></div>Legal Risk: {creditQualityData.legalRisk}</li>
        <li> <div className={`leftSideBox ${creditQualityData.climateProjections == "Fair" ? "isGreen" : creditQualityData.climateProjections == "Concerning" ? "isYellow" : "isRed"}`}></div>Climate Projections: {creditQualityData.climateProjections}</li>
        <li> <div className={`leftSideBox ${"isYellow" /* idk hvorfor skog er gul vs. ocean er grønn f.eks så alle blir gul :) */}`}></div>Method of Capture: {creditQualityData.methodOfCapture}</li>
        <li> <div className={`leftSideBox ${creditQualityData.stakeholderEngagement == "High" ? "isGreen" : creditQualityData.stakeholderEngagement == "Ok" ? "isYellow" : "isRed"}`}></div>Stakeholder Engagement: {creditQualityData.stakeholderEngagement}</li>
        <li> <div className={`leftSideBox ${creditQualityData.permanence == "High" ? "isGreen" : creditQualityData.permanence == "Medium" ? "isYellow" : "isRed"}`}></div>Permanence: {creditQualityData.permanence}</li>

        <li> Owner Structure: {creditQualityData.ownerStructure}</li>
      </ul>


      <div className="scoreData">
        <div style={scoreDiv}>
          <div style={score}></div>
        </div>
        <p className="scoreText">{scoreData}%</p>
      </div>

      <div className="verifiedBox">
        <p className="verifiedBy">This Carbon Capture Project has been 
        benchmarked against </p>
        <div className="logosDiv">
          <img className="standardLogo" src="/assets/logos/trefadder.webp" alt="" />
          <div className="moreInfo">
            <i class="fa-solid fa-circle-info"></i>
          </div>
        </div>
      </div>

      


    </div>
  )


}

