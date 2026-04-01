const AIRLINES = [
    { name: "Flybondi", initials: "FB", color: "bg-yellow-400 text-black border-yellow-500" },
    { name: "Aerolíneas Argentinas", initials: "AR", color: "bg-blue-600 text-white border-blue-700" },
    { name: "JetSmart", initials: "JS", color: "bg-indigo-600 text-white border-indigo-700" }
];

const PLACES = {
    'BRC': "San Carlos de Bariloche",
    'COR': "Córdoba",
    'MDZ': "Mendoza",
    'EPA': "Buenos Aires (El Palomar)",
};

const random = (s) => {
    let x = Math.sin(s) * 10000;
    return x - Math.floor(x);
};

export function getMockedFlightDetails(id, origin, destination) {
    const airline = AIRLINES[id % AIRLINES.length];
    
    // Times
    const startHour = Math.floor(random(id) * 16) + 5; // 5 to 20
    const startMin = Math.floor(random(id + 1) * 12) * 5;
    const durationMins = Math.floor(random(id + 2) * 180) + 75; // 75 to 255 mins
    
    const startTime = new Date(2021, 1, 1, startHour, startMin);
    const endTime = new Date(startTime.getTime() + durationMins * 60000);
    
    const layovers = random(id + 3) > 0.7 ? 1 : 0;
    
    // Recommend score (just a mock score based on price and duration) 
    // lower is better
    const recommendedScore = durationMins + 0.5 * id; 
    
    const originName = PLACES[origin] || origin;
    const destName = PLACES[destination] || destination;

    return {
        airline,
        startTime,
        endTime,
        durationMins,
        layovers,
        originName,
        destName,
        recommendedScore
    };
}

export function formatTime(d) {
    return d.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' });
}

export function formatDuration(mins) {
    return `${Math.floor(mins / 60)}h ${mins % 60}m`;
}
