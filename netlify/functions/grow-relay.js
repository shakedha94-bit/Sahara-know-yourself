exports.handler = async function (event) {
  try {
    const response = await fetch(
      "https://zbzhsqcuubbeemhlblvq.supabase.co/functions/v1/rapid-processor",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: "sb_publishable_-CJmYjnunQheOi9y2hqpmA_YlJ6aWrA",
        },
        body: event.body,
      }
    );
    const text = await response.text();
    return { statusCode: response.status, body: text };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: String(e) }) };
  }
};
