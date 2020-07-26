var overviewerConfig = {
    "CONST": {
        "image": {
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png"
        },
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "tileSize": 384,
        "UPPERRIGHT": 1,
        "mapDivId": "mcmap",
        "LOWERRIGHT": 2
    },
    "tilesets": [
        {
            "base": "",
            "imgextension": "png",
            "defaultZoom": 1,
            "spawn": [
                3,
                80,
                12
            ],
            "maxZoom": 8,
            "showlocationmarker": true,
            "name": "Daytime Render",
            "world": "world",
            "path": "day",
            "isOverlay": false,
            "north_direction": 0,
            "poititle": "Markers",
            "last_rendertime": 1595760979,
            "zoomLevels": 8,
            "center": [
                3,
                80,
                12
            ],
            "minZoom": 0,
            "bgcolor": "#1a1a1a"
        }
    ],
    "worlds": [
        "world"
    ],
    "map": {
        "cacheTag": "1595761361",
        "controls": {
            "coordsBox": true,
            "overlays": true,
            "pan": true,
            "mapType": true,
            "spawn": true,
            "compass": true,
            "zoom": true
        },
        "debug": true,
        "north_direction": "lower-left"
    }
};
