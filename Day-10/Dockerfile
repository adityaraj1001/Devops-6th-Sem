# Stage 1: Build stage
FROM python:3.9 AS builder

WORKDIR /app
COPY app.py .

# Stage 2: Final stage
FROM python:3.9-slim

WORKDIR /app
COPY --from=builder /app/app.py .

CMD ["python", "app.py"]
