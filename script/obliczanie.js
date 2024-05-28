document.getElementById('calculateForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const team1Goals = parseInt(document.getElementById('team1Goals').value);
    const team2Goals = parseInt(document.getElementById('team2Goals').value);
    const team1YellowCards = parseInt(document.getElementById('team1YellowCards').value);
    const team2YellowCards = parseInt(document.getElementById('team2YellowCards').value);
    const team1RedCards = parseInt(document.getElementById('team1RedCards').value);
    const team2RedCards = parseInt(document.getElementById('team2RedCards').value);
    const team1CornerKicks = parseInt(document.getElementById('team1CornerKicks').value);
    const team2CornerKicks = parseInt(document.getElementById('team2CornerKicks').value);
    const stadiumNoise = parseInt(document.getElementById('stadiumNoise').value);

    const team1Score = team1Goals + team1YellowCards + team1RedCards + team1CornerKicks + stadiumNoise;
    const team2Score = team2Goals + team2YellowCards + team2RedCards + team2CornerKicks;

    const probability = team1Score / (team1Score + team2Score);

    document.getElementById('result').textContent = `Prawdopodobieństwo zwycięstwa drużyny 1: ${probability * 100}%`;
});