var overviewerConfig = {
    "CONST": {
        "LOWERRIGHT": 2,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "tileSize": 384,
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0,
        "mapDivId": "mcmap",
        "LOWERLEFT": 3
    },
    "tilesets": [
        {
            "showlocationmarker": true,
            "path": "day",
            "base": "",
            "zoomLevels": 10,
            "imgextension": "png",
            "north_direction": 0,
            "poititle": "Markers",
            "maxZoom": 10,
            "last_rendertime": 1598443080,
            "bgcolor": "#1a1a1a",
            "isOverlay": false,
            "center": [
                80,
                96,
                192
            ],
            "spawn": [
                80,
                96,
                192
            ],
            "name": "Daytime Render",
            "defaultZoom": 1,
            "minZoom": 0,
            "world": "Core01"
        }
    ],
    "worlds": [
        "Core01"
    ],
    "map": {
        "debug": true,
        "cacheTag": "1598443286",
        "north_direction": "lower-left",
        "controls": {
            "compass": true,
            "pan": true,
            "spawn": true,
            "overlays": true,
            "coordsBox": true,
            "mapType": true,
            "zoom": true
        }
    }
};
