// 'use client'
// import { useEffect, useState } from "react";


// const apii = () => {
//     const [data, setData] = useState(null);

//     useEffect(() => {
//         const fetchdata = async () => {



//             const response = await fetch("http://localhost:3000/api/users/22");
           
//             let dataa = JSON.stringify(response);

//             setData(dataa);
//             console.log(dataa)

//         }
//         fetchdata()

//     }, [])
//     if (!data) return <p>loading......</p>


//     return (


//         <>
//             <h1>hy</h1>

//             <pre>{data}</pre>
//             {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

//         </>
//     )

// }

// export default apii;


'use client'
import { useEffect, useState } from "react";

const ApIComponent = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/users/22");
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <>
            <h1>Hy</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
    );
};

export default ApIComponent;
