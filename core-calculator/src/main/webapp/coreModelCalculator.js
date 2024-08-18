function calculateCoreModel() {
    // Core Factors
    const materialStrength = parseFloat(document.getElementById('materialStrength').value);
    const safetyCoefficient = parseFloat(document.getElementById('safetyCoefficient').value);
    const temperatureFactor = parseFloat(document.getElementById('temperatureFactor').value);
    const loadFactor = parseFloat(document.getElementById('loadFactor').value);

    const designStrength = (materialStrength / safetyCoefficient) * temperatureFactor * loadFactor;

    // Volume
    const totalVolume = parseFloat(document.getElementById('totalVolume').value);
    const nonFunctionalVolume = parseFloat(document.getElementById('nonFunctionalVolume').value);

    const effectiveVolume = totalVolume - nonFunctionalVolume;

    // Length
    const totalLength = parseFloat(document.getElementById('totalLength').value);
    const nonFunctionalLength = parseFloat(document.getElementById('nonFunctionalLength').value);

    const effectiveLength = totalLength - nonFunctionalLength;

    // Area
    const totalArea = parseFloat(document.getElementById('totalArea').value);
    const nonFunctionalArea = parseFloat(document.getElementById('nonFunctionalArea').value);

    const effectiveArea = totalArea - nonFunctionalArea;

    // Minimum Area
    const crossSections = document.getElementById('crossSections').value.split(',').map(Number);
    const minimumArea = Math.min(...crossSections);

    // Display Results
    const results = `
        <strong>Design Strength:</strong> ${designStrength.toFixed(2)} MPa<br>
        <strong>Effective Volume:</strong> ${effectiveVolume.toFixed(2)} cubic units<br>
        <strong>Effective Length:</strong> ${effectiveLength.toFixed(2)} units<br>
        <strong>Effective Area:</strong> ${effectiveArea.toFixed(2)} square units<br>
        <strong>Minimum Area:</strong> ${minimumArea.toFixed(2)} square units
    `;
    document.getElementById('results').innerHTML = results;
}
