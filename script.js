document.addEventListener("DOMContentLoaded", function(){

function clearSections(){
    document.querySelectorAll("section").forEach(sec=>{
        sec.classList.remove("active");
    });
}

window.showHome = function(){
    clearSections();
    document.getElementById("home").classList.add("active");
}

window.showGrade = function(grade){

clearSections();
const content = document.getElementById("content");

const notes = {

7: `
<h2>GRADE 7 INTEGRATED SCIENCE NOTES</h2>

<div class="card">
<h3>STRAND 1: LIVING THINGS AND THEIR ENVIRONMENT</h3>

<p><b>1. Characteristics of Living Things (MRS GREN)</b></p>
<ul>
<li>Movement – ability to change position.</li>
<li>Respiration – release of energy from food.</li>
<li>Sensitivity – response to stimuli.</li>
<li>Growth – permanent increase in size.</li>
<li>Reproduction – production of offspring.</li>
<li>Excretion – removal of waste.</li>
<li>Nutrition – obtaining and using food.</li>
</ul>

<p><b>2. The Cell</b></p>
<p>The cell is the basic structural and functional unit of life.</p>
<p><b>Plant Cell:</b> Cell wall, cell membrane, cytoplasm, nucleus, chloroplast, vacuole.</p>
<p><b>Animal Cell:</b> Cell membrane, cytoplasm, nucleus (no cell wall).</p>

<p><b>3. Ecosystems</b></p>
<p>An ecosystem consists of biotic (living) and abiotic (non-living) components.</p>
<p>Food Chain example: Grass → Grasshopper → Frog → Snake.</p>
</div>

<div class="card">
<h3>STRAND 2: MATTER</h3>

<p><b>1. States of Matter</b></p>
<ul>
<li>Solid – fixed shape & volume.</li>
<li>Liquid – fixed volume, no fixed shape.</li>
<li>Gas – no fixed shape or volume.</li>
</ul>

<p><b>2. Changes of State</b></p>
<ul>
<li>Melting – solid to liquid.</li>
<li>Freezing – liquid to solid.</li>
<li>Evaporation – liquid to gas.</li>
<li>Condensation – gas to liquid.</li>
</ul>

<p><b>3. Separation of Mixtures</b></p>
<ul>
<li>Filtration</li>
<li>Decantation</li>
<li>Evaporation</li>
<li>Magnetic separation</li>
</ul>
</div>

<div class="card">
<h3>STRAND 3: ENERGY</h3>

<p><b>Forms of Energy:</b> Heat, Light, Sound, Electrical, Chemical, Mechanical.</p>

<p><b>Heat Transfer:</b></p>
<ul>
<li>Conduction – heat transfer through solids.</li>
<li>Convection – heat transfer in liquids and gases.</li>
<li>Radiation – heat transfer through electromagnetic waves.</li>
</ul>
</div>

<div class="card">
<h3>STRAND 4: FORCE</h3>

<p><b>Force:</b> A push or pull measured in Newtons (N).</p>

<p><b>Types of Forces:</b></p>
<ul>
<li>Gravitational force</li>
<li>Magnetic force</li>
<li>Frictional force</li>
</ul>

<p><b>Pressure Formula:</b></p>
<p>Pressure = Force / Area</p>
</div>
`,

8: `
<h2>GRADE 8 INTEGRATED SCIENCE NOTES</h2>

<div class="card">
<h3>STRAND 1: LIVING THINGS</h3>

<p><b>1. Human Reproduction</b></p>
<p>Male system: Testes produce sperm.</p>
<p>Female system: Ovaries produce ova.</p>
<p>Fertilization occurs in the oviduct.</p>

<p><b>2. Microorganisms</b></p>
<ul>
<li>Bacteria – some cause disease.</li>
<li>Viruses – cause illnesses like flu.</li>
<li>Fungi – used in baking & medicine.</li>
</ul>

<p><b>3. Photosynthesis Equation</b></p>
<p>Carbon dioxide + Water → Glucose + Oxygen</p>
</div>

<div class="card">
<h3>STRAND 2: MATTER</h3>

<p><b>1. Atomic Structure</b></p>
<ul>
<li>Protons – positive charge</li>
<li>Electrons – negative charge</li>
<li>Neutrons – neutral</li>
</ul>

<p><b>2. Acids and Bases</b></p>
<p>pH scale ranges from 0–14.</p>
<p>Acids: pH below 7.</p>
<p>Bases: pH above 7.</p>
</div>

<div class="card">
<h3>STRAND 3: ENERGY</h3>

<p><b>Electric Circuits</b></p>
<p>Types: Series circuit and Parallel circuit.</p>
<p>Ohm’s Law: V = I × R</p>
</div>

<div class="card">
<h3>STRAND 4: FORCE AND MOTION</h3>

<p><b>Speed Formula:</b> Speed = Distance / Time</p>
<p><b>Acceleration:</b> Change in velocity over time.</p>
<p><b>Gravity:</b> 9.8 m/s² on Earth.</p>
</div>
`,

9: `
<h2>GRADE 9 INTEGRATED SCIENCE NOTES</h2>

<div class="card">
<h3>STRAND 1: LIVING THINGS</h3>

<p><b>Genetics</b></p>
<p>Genes are units of heredity found in chromosomes.</p>
<p>DNA carries genetic information.</p>

<p><b>Inheritance</b></p>
<p>Dominant traits mask recessive traits.</p>
<p>Example: Brown eyes dominant over blue.</p>

<p><b>Environmental Conservation</b></p>
<ul>
<li>Afforestation</li>
<li>Waste management</li>
<li>Recycling</li>
</ul>
</div>

<div class="card">
<h3>STRAND 2: MATTER</h3>

<p><b>Chemical Reactions</b></p>
<p>Law of Conservation of Mass – Matter is neither created nor destroyed.</p>

<p><b>Balancing Example:</b></p>
<p>2H₂ + O₂ → 2H₂O</p>

<p><b>pH Scale</b></p>
<p>Strong acids (0–3), Neutral (7), Strong bases (11–14).</p>
</div>

<div class="card">
<h3>STRAND 3: ENERGY</h3>

<p><b>Renewable Energy:</b> Solar, wind, hydroelectric.</p>
<p><b>Power Formula:</b> Power = Work / Time</p>
</div>

<div class="card">
<h3>STRAND 4: FORCE</h3>

<p><b>Newton’s Laws</b></p>
<p>1st Law – Inertia</p>
<p>2nd Law – F = m × a</p>
<p>3rd Law – Action and Reaction</p>

<p><b>Momentum Formula:</b> Momentum = Mass × Velocity</p>
</div>
`
};

content.innerHTML = notes[grade];
content.classList.add("active");

}

});

