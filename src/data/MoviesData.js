export const getData = async () => {
    try {
        const response = await fetch(
            "http://localhost:8080/movies",
            {
                method: "GET",
                mode: "cors"
            }
        )

        if(response.ok){
            const data = await response.json()
            return data
        } else {
            console.error("Fetch error:", response.statusText);
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
    } catch (error) {
        console.error("Fetch error:", error);
    throw error;
    }
}