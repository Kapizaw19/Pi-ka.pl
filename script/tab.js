const tableBody = document.getElementById('table-body');

const teams = [
 
  { name: 'Manchester City', points: 112, goalsDiff: 99 },
  { name: 'Arsenal', points: 102, goalsDiff: 87 },
  { name: 'Liverpool', points: 100, goalsDiff: 88 },
  { name: 'Aston Villa', points: 93, goalsDiff: 86 },
  { name: 'Tottenham', points: 87, goalsDiff:70 },
  { name: 'Chealsea', points: 80, goalsDiff: 52 },
  { name: 'Newcastle', points: 74, goalsDiff: 59 },
  { name: 'Man Unt', points: 63, goalsDiff: 61 },
  { name: 'West Ham', points: 60, goalsDiff: 56 },
  { name: 'Crystal Palace', points: 55, goalsDiff: 55 },
  { name: 'Brighton', points: 50, goalsDiff: 47 },
  { name: 'Bournemouth', points: 49, goalsDiff: 45 },
  { name: 'Fulham', points: 44, goalsDiff: 42 },
  { name: 'Everton', points: 40, goalsDiff: 37 },
  { name: 'Luton Town', points: 38, goalsDiff: 23 },
  { name: 'Leeds Unt', points: 35, goalsDiff: 31 },
  { name: 'Leisecster City', points: 25, goalsDiff: 43 },
  { name: 'Derby Country', points: 24, goalsDiff: 31 },
  { name: 'Stoke City', points: 22, goalsDiff: 33 },
  { name: 'Blackburn', points: 12, goalsDiff: 31 },
];
teams.forEach((team, index) => {
    const row = document.createElement('tr');
  
    const positionCell = document.createElement('td');
    positionCell.style.width = '30px';
    if (index === 0) {
      row.appendChild(positionCell);
      const positionText = document.createTextNode(index + 1);
      positionCell.appendChild(positionText);
    } else {
      const emptyCell = document.createElement('td');
      row.appendChild(emptyCell);
    }
  
    const teamCells = [
      document.createElement('td'),
      document.createElement('td'),
    ];
  
    teamCells.forEach((cell, i) => {
      if (i === 0) {
        cell.textContent = index + 1;
      } else {
        cell.textContent = team.name;
        cell.style.backgroundColor = 'lightblue';
      }
      row.appendChild(cell);
    });
  
    const pointsCell = document.createElement('td');
    pointsCell.textContent = team.points;
    row.appendChild(pointsCell);
  
    const goalsDiffCell = document.createElement('td');
    goalsDiffCell.textContent = team.goalsDiff;
    row.appendChild(goalsDiffCell);
  
    tableBody.appendChild(row);
  });