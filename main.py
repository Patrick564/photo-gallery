import uvicorn
from fastapi import FastAPI

app = FastAPI()


@app.get('/')
async def home():
    return {'message': 'Firts upload to AWS.'}


if __name__ == "__main__":
    uvicorn.run('main:app', host='120.0.0.1', port=8000, log_level='info')
