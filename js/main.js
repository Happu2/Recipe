import { RecipeManager } from './recipeManager.js';

document.addEventListener('DOMContentLoaded', function() {
    try {
        RecipeManager.init();
    } catch (error) {
        console.error('Critical application error:', error);
        document.body.innerHTML = `
            <div style="padding: 40px; text-align: center; color: white; background: #0F0F23;">
                <h1>😵 Application Error</h1>
                <p>Sorry, something went wrong. Please refresh the page.</p>
                <button onclick="window.location.reload()" style="
                    background: #8B5FBF; 
                    color: white; 
                    border: none; 
                    padding: 10px 20px; 
                    border-radius: 5px; 
                    cursor: pointer;
                    margin-top: 20px;
                ">Refresh Page</button>
            </div>
        `;
    }
});
