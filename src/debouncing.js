// import React, { useEffect, useState } from "react";
// // import axios from "react-axios";

// export default function Debounce() {
//     const [pinCode, setPinCode] = useState("");
//     useEffect(() => {
//         const getData = 
//         async() => {
//             const response = await fetch(`https://api.postalpincode.in/pincode/${pinCode}`);
//             const result = await response.json();
//             console.log(result,"result");
//             setPinCode(result);
//         }
//         getData();
//         //  setTimeout(() => {
//         //     axios
//         //         .get(`https://api.postalpincode.in/pincode/${pinCode}`)
//         //         .then((response) => {
//         //             console.log(response.data[0]);
//         //         });
//         // }, 2000);
//         // return () => clearTimeout(getData);
//     }, [pinCode]);

//     return (
        
//             <input
//                 placeholder="Search Input.."
//                 onChange={(event) => setPinCode(event.target.value)}
//             />
        
//     );
// }


import React, { useEffect, useState } from "react";

export default function Debounce() {
  const [pinCode, setPinCode] = useState("");
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (pinCode.trim() === "") {
      // Reset result if the input is empty
      setResult(null);
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.postalpincode.in/pincode/${pinCode}`
        );
        const data = await response.json();

        if (response.ok) {
          setResult(data[0]);
        } else {
          console.error("Error fetching data:", data);
          setResult(null);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setResult(null);
      }
    };

    const timerId = setTimeout(fetchData, 2000);

    // Cleanup function to clear the timeout on component unmount or pinCode change
    return () => clearTimeout(timerId);
  }, [pinCode]);

  return (
    <div>
      <input
        placeholder="Search Input.."
        onChange={(event) => setPinCode(event.target.value)}
      />
      {result && (
        <div>
          <p>Result:</p>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}






// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function Debounce() {
//   const [pinCode, setPinCode] = useState("");
//   const [result, setResult] = useState(null);

//   useEffect(() => {
//     if (pinCode.trim() === "") {
//       // Reset result if the input is empty
//       setResult(null);
//       return;
//     }

//     const timerId = setTimeout(() => {
//       axios
//         .get(`https://api.postalpincode.in/pincode/${pinCode}`)
//         .then((response) => {
//           const data = response.data[0];
//           setResult(data);
//         })
//         .catch((error) => {
//           console.error("Error fetching data:", error);
//           setResult(null);
//         });
//     }, 2000);

//     // Cleanup function to clear the timeout on component unmount or pinCode change
//     return () => clearTimeout(timerId);
//   }, [pinCode]);

//   return (
//     <div>
//       <input
//         placeholder="Search Input.."
//         onChange={(event) => setPinCode(event.target.value)}
//       />
//       {result && (
//         <div>
//           <p>Result:</p>
//           <pre>{JSON.stringify(result, null, 2)}</pre>
//         </div>
//       )}
//     </div>
//   );
// }



