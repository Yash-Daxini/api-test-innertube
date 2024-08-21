fetch(
  "https://www.youtube.com/youtubei/v1/player?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-YouTube-Client-Name": "1", // The client name, usually '1' for the web
      "X-YouTube-Client-Version": "2.20220918", // You need the correct client version
      Origin: "https://www.youtube.com",
    },
    body: JSON.stringify({
      context: {
        client: {
          clientName: "WEB",
          clientVersion: "2.20220918",
          // Add more context parameters here as needed
        },
        // You can include more context fields like `user`, `request`, etc.
      },
      browseId: 'UC_x5XG1OV2P6uZZ5FSM9Ttw'
    }),
  }
)
  .then((response) => {
    console.warn(response);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });
