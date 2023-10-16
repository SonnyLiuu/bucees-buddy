import { useState } from "react"

export const useUser = () => {
  const [error, setError] = useState("")

  const findUser = async (data) => {
    setError("");

    const response = await fetch(`/api/user/${data}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    const json = await response.json();

    if (!response.ok)
    {
      setError(json.message)
    }
    if (response.status == 200)
    {
      // store user in localStorage
      localStorage.setItem("tripData", JSON.stringify(json))
    }
  }
  return { findUser, error }
}