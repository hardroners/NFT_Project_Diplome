import requests

def add_document_to_fleek_storage(api_key, api_secret, bucket_name, file_path):
    url = f"https://{bucket_name}.storage.fleek.co/{file_path}"
    headers = {"Content-Type": "application/octet-stream"}
    with open(file_path, "rb") as file:
        response = requests.put(
            url,
            headers=headers,
            data=file,
            auth=(api_key, api_secret),
        )
    if response.status_code == 200:
        return response.json()["hash"]
    else:
        return None
