// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use mongodb::{ 
    bson::{doc, Document},
    Client,
    Collection,
};
use tauri::async_runtime::block_on;

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn create_class( ){
    println!("Backend Invoked!");



}


fn main() {
    // Fetch movie data before the Tauri application runs
    //   block_on(fetch_movie()).expect("Failed to fetch movie");

    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet])
        .invoke_handler(tauri::generate_handler![create_class])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
