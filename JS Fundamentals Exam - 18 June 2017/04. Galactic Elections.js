function galacticElections(ballots) {
    let systemsWithCandidates = new Map();

    for (let ballot of ballots) {
        if (!systemsWithCandidates.has(ballot.system)) {
            systemsWithCandidates.set(ballot.system, new Map());
        }
        let system = systemsWithCandidates.get(ballot.system);
        if (!system.has(ballot.candidate)){
            system.set(ballot.candidate, 0);
        }

        system.set(ballot.candidate, system.get(ballot.candidate) + ballot.votes);
    }

    let systemsWithWinners = new Map();

    for (let [sk, sv] of systemsWithCandidates) {
       let winnerName = '';
       let maxVote = 0;
       let votesSum = 0;
        for (let [ck, cv] of sv) {
            if (maxVote <= cv) {
                winnerName = ck;
                maxVote = cv;
            }
            votesSum += cv;
        }
        systemsWithWinners.set(sk, new Map());
        systemsWithWinners.get(sk).set(winnerName, votesSum);
    }
    let winners = new Map();
    let totalVotes = 'totalVotes';
    let totalVotesSum = 0;
    let systemWithVotes = 'systemWithVotes';
    for (let [sk, sv] of systemsWithWinners) {
        for (let [wk, wv] of sv) {
            if(!winners.has(wk)){
                winners.set(wk, new Map());
                winners.get(wk).set(totalVotes, 0);
                winners.get(wk).set(systemWithVotes, []);
            }
            let winner = winners.get(wk);
            winner.set(totalVotes, winner.get(totalVotes) + wv);
            winner.get(systemWithVotes).push({[sk]: wv});
            totalVotesSum += wv;
        }
    }

    let sortedWinnerByVotes = new Map([...winners.entries()].sort((a, b) => b[1].get(totalVotes) - a[1].get(totalVotes)));

    let totalWinner = sortedWinnerByVotes.entries().next().value;
    if (totalWinner[1].get(totalVotes) == totalVotesSum)
    {
    } else if (totalWinner[1].get(totalVotes) / totalVotesSum >= 0.50) {
        let secondCandidate = [...sortedWinnerByVotes.entries()];
        console.log(`${totalWinner[0]} wins with ${totalWinner[1].get(totalVotes)} votes
Runner up: ${secondCandidate[1][0]}
`);
        for (let obj of totalWinner[1].get("systemWithVotes")) {
            console.log(obj);
        }

    } else {

    }


}

galacticElections([{ system: 'Theta', candidate: 'Flying Shrimp', votes: 10 },
    { system: 'Sigma', candidate: 'Space Cow',     votes: 200 },
    { system: 'Sigma', candidate: 'Flying Shrimp', votes: 120 },
    { system: 'Tau',   candidate: 'Space Cow',     votes: 15 },
    { system: 'Sigma', candidate: 'Space Cow',     votes: 60 },
    { system: 'Tau',   candidate: 'Flying Shrimp', votes: 150}]);