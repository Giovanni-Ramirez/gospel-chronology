import { useState, useEffect } from "react";

const URL = 'https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/en-asv/books/genesis/chapters/1.json'

function Read() {

    const [ biblePassage , setPassage ] = useState(0)
    const [ bibleBook , setBook ] = useState('Genesis')
    const [ bibleVerse, setVerse ] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(URL)
            console.log(result)
            result.json().then(json => {
                console.log(json);
                setPassage(json.text)
                setVerse(json.verse)
            })
        }
        fetchData();
    }, []);

    return (
        <div>
            Look here
            <h3>
                {bibleBook}
            </h3>
            <div>
                {bibleVerse}. {biblePassage}
            </div>
        </div>
    )
}

export default Read;