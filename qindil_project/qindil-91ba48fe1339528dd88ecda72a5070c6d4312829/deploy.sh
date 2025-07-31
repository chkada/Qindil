#!/bin/bash

# --- CONFIG ---
BRANCH="main"
MESSAGE="Update landing page"
REPO_PATH="./"  # Adjust if not at root

# --- DEPLOY SCRIPT ---
cd "$REPO_PATH" || exit 1

echo "Staging changes..."
git add .

echo "Committing..."
git commit -m "$MESSAGE"

echo "Pushing to $BRANCH..."
git push origin "$BRANCH"

echo "✅ Code pushed. Vercel will now auto-deploy via Git integration."
