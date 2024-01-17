function calculEmpreinteCarbone() {
    const nbVideos = Number(document.getElementById('videos').value);
    const NRJServeur = Number(document.getElementById('NRJServeur').value);
    const cpu = Number(document.getElementById('cpu').value);

    const coefficientEmissionVideos = 0.1; 
    const coefficientEmissionServeur = 0.3;
    const coefficientEmissionCpu = 0.2;

    const emissionVideos = Number(nbVideos * coefficientEmissionVideos);
    const emissionServeur = Number(NRJServeur * coefficientEmissionServeur);
    const emissionCpu = Number(cpu * coefficientEmissionCpu);
    
    console.log(emissionVideos);console.log(emissionServeur);console.log(emissionCpu);
    
    return emissionVideos + emissionServeur + emissionCpu;
}

document.addEventListener('DOMContentLoaded', () => {

    document.addEventListener("click", function(e) {
        const EmpreinteCarbone = calculEmpreinteCarbone();
        console.log(EmpreinteCarbone);

        document.getElementById('EmpreinteCarbone').textContent = EmpreinteCarbone;
    });
})