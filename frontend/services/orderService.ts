const API_URL = "http://localhost:3001/api/orders";

export async function createOrder(data: any) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  console.log("Status:", response.status);
  console.log("Resposta do backend:", result);

  if (!response.ok) {
    throw new Error(JSON.stringify(result));
  }

  return result;
}