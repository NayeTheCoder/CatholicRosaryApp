import React, { useState, useEffect } from "react";
import '../../styles/PsalmsPage.css'
import useScreenSize from '../../utils/useScreenSize'

const psalms = [
	"Translating...",
   "Translating...",
   "Translating..."
];

const PsalmsPageSpanish = () => {
	const { width } = useScreenSize();
	const [expandedPsalm, setExpandedPsalm] = useState({"psalm_23":(width > 767 ?true:false), "psalm_51":(width > 767 ? true:false), "psalm_91":(width > 767 ? true:false)});
	const cursor = width > 767 ? "auto" : "pointer";
	const toggleExpand = (number) => {
		setExpandedPsalm({"psalm_23":number == 0 ? !expandedPsalm.psalm_23: expandedPsalm.psalm_23, "psalm_51":number == 1 ? !expandedPsalm.psalm_51: expandedPsalm.psalm_51, "psalm_91":number == 2 ? !expandedPsalm.psalm_91: expandedPsalm.psalm_91});
	};

	return (
		<>
			<h1 className="title">Salmos</h1>
			<div id="psalms-page">
				<div className="psalms-row">
						<div>
							<img id="psalm-pic1" className="psalms-image" src="./images/salmo_23.JPEG"/>
						</div>
						<div 
						style={{
							display: "flex",
							flexDirection: "column",
							marginTop: 0,
							marginBottom: expandedPsalm.psalm_91 ? "10px" : 0,
							color: "#333",
							fontSize: "18px",
							cursor: cursor
						}} 
						onClick={() => {
							if (width < 767)
								{
									toggleExpand(0)
								}
							}}>
							<h1 className="title">
								Salmo 23
							</h1>
						   {expandedPsalm.psalm_23 && (
								<p className="text-content" style={{ marginTop: 0 }}>{psalms[0]}</p>
							)}
						</div>
				</div>
				<div className="psalms-row">
						<div 
						style={{
							display: "flex",
							flexDirection: "column",
							marginTop: 0,
							marginBottom: expandedPsalm.psalm_51 ? "10px" : 0,
							color: "#333",
							fontSize: "18px",
							cursor: cursor
						}} 
						onClick={() => {
							if (width < 767)
								{
									toggleExpand(1)
								}
							}}>
							 <div id="mobile-image">
								<img className="psalms-image" src="./images/salmo_51.JPEG"/>
							</div>
							<h1 className="title">
								Salmo 51
							</h1>
							{expandedPsalm.psalm_51 && (
								<p className="text-content" style={{ marginTop: 0 }}>{psalms[1]}</p>
							)}
						</div>
						<div id="desktop-image">
							<img id="psalm-pic2" className="psalms-image" src="./images/salmo_51.JPEG"/>
						</div>
						
				</div>
				<div className="psalms-row">
						<div>
							<img id="psalm-pic3" className="psalms-image" src="./images/salmo_91.JPEG"/>
						</div>
						<div 
						style={{
							display: "flex",
							flexDirection: "column",
							marginTop: 0,
							marginBottom: expandedPsalm.psalm_91 ? "10px" : 0,
							color: "#333",
							fontSize: "18px",
							cursor: cursor
							  
						}} 
						onClick={() => {
							if (width < 767)
								{
									toggleExpand(2)
								}
							}}>
							<h1 className="title">
								Salmo 91
							</h1>
							{expandedPsalm.psalm_91 && (
								<p className="text-content" style={{ marginTop: 0 }}>{psalms[2]}</p>
							)}
						</div>
				</div>
			</div>
			</>
	);
};

export default PsalmsPageSpanish;


