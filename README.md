# Visualizing Data with Leaflet

## Background
![image](https://user-images.githubusercontent.com/79106201/125175182-00ce6a80-e190-11eb-9422-665433641095.png)

Welcome to the United States Geological Survey, or USGS for short! The USGS is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment; and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes. As a new hire, you will be helping them out with an exciting new project!

The USGS is interested in building a new set of tools that will allow them visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. Their hope is that being able to visualize their data will allow them to better educate the public and other government organizations (and hopefully secure more funding..) on issues facing our planet.

## Before You Begin

1. Create a new repository for this project called leaflet-challenge. Do not add this homework to an existing repository.
2. Clone the new repository to your computer.
3. Inside your local git repository, create a directory for the Leaflet challenge. Use the folder names to correspond to the challenges: Leaflet-Step-1 and Leaflet-Step-2.
4. This homeworks utilizes both html and Javascript so be sure to add all the necessary files. These will be the main files to run for analysis.
5. Push the above changes to GitHub or GitLab.

# Your Task

## Level 1: Basic Visualization
![image](https://user-images.githubusercontent.com/79106201/125175202-29eefb00-e190-11eb-8d05-d604542ba32b.png)

Your first task is to visualize an earthquake data set.

## 1. Get your data set
![image](https://user-images.githubusercontent.com/79106201/125175220-43904280-e190-11eb-9a5c-bc4f4affff7f.png)

The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visit the USGS GeoJSON Feed page and pick a data set to visualize. When you click on a data set, for example 'All Earthquakes from the Past 7 Days', you will be given a JSON representation of that data. You will be using the URL of this JSON to pull in the data for our visualization.
![image](https://user-images.githubusercontent.com/79106201/125175225-49862380-e190-11eb-8bc1-6b17cddf07ee.png)

## 2. Import & Visualize the Data

Create a map using Leaflet that plots all of the earthquakes from your data set based on their longitude and latitude.
- Your data markers should reflect the magnitude of the earthquake by their size and and depth of the earth quake by color. Earthquakes with higher magnitudes should appear larger and earthquakes with greater depth should appear darker in color.
- HINT the depth of the earth can be found as the third coordinate for each earthquake.
- Include popups that provide additional information about the earthquake when a marker is clicked.
- Create a legend that will provide context for your map data.
- Your visualization should look something like the map above.

# Level 2: More Data (Optional)
![image](https://user-images.githubusercontent.com/79106201/125175243-6e7a9680-e190-11eb-8b23-1623e06fbe20.png)

The USGS wants you to plot a second data set on your map to illustrate the relationship between tectonic plates and seismic activity. You will need to pull in a second data set and visualize it along side your original set of data. Data on tectonic plates can be found at https://github.com/fraxen/tectonicplates.

In this step we are going to..
- Plot a second data set on our map.
- Add a number of base maps to choose from as well as separate out our two different data sets into overlays that can be turned on and off independently.
- Add layer controls to our map.

