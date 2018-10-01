class Helper {
    static sendUserData = userData => {
        fetch('http://mmg-score.herokuapp.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(res => {
                return res.json();
            })
            .catch(err => {
                console.log(err);
            });
    };

    static getUsers = activeUsername => {
        return fetch('http://mmg-score.herokuapp.com', {method: 'GET'})
            .then(res => {
                return res.json();
            })
            .then(data => {
                let userPosition = 'Not Defined';
                return [
                    data.result.sort((a, b) => b.score - a.score).map((el, idx) => {
                        el.rate = idx + 1;
                        if (el.username === activeUsername) {
                            userPosition = el.rate;
                        }
                        return el;
                    }),
                    userPosition
                ];
            })
            .then(([sortedResults, userPosition]) => {
                const usersArr = Helper.getChunks(sortedResults, 10);
                return [usersArr, userPosition];
            });
    };

    static getChunks = (arr, size) => {
        let resultArr = [];
        while (arr.length) {
            resultArr = [...resultArr, arr.splice(0, size)];
        }
        return resultArr;
    };

    static generateCardsArr = (width, height) => {
        let cards = Array(width * height)
            .fill(null)
            .map((el, idx) => ({
                value: Math.floor(idx / 2),
                id: idx,
                status: 'hidden'
            }));
        cards = Helper.shuffleCards(cards);
        return cards;
    };

    static shuffleCards = cards => cards.sort(() => Math.random() - 0.5);

    static changeCards = (status, baseArr, updatedArr) => {
        return baseArr.map((baseEl, idx) => {
            updatedArr.forEach(updatedEl => {
                baseEl.status = idx === updatedEl.id ? status : baseEl.status;
            });
            return baseEl;
        });
    };

    static compareCards = compareArr =>
        compareArr[0].value === compareArr[1].value && compareArr[0].id !== compareArr[1].id
            ? 'dropped'
            : 'hidden';

    static calculateScore = (width, height, time) => {
        const score = ~~(20 * width * height - 5 * time);
        return score < 0 ? 0 : score;
    };
}

export default Helper;
