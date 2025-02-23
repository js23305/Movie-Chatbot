import kaggle
import os

# Set download path
dataset_name = "tmdb/tmdb-movie-metadata"
download_path = "chatbot/dataset"

# Create directory if it doesn't exist
os.makedirs(download_path, exist_ok=True)

# Download dataset
kaggle.api.dataset_download_files(dataset_name, path=download_path, unzip=True)

print("Dataset downloaded successfully in:", download_path)
