var overviewerConfig = {
    "worlds": [
        "Core01"
    ],
    "CONST": {
        "tileSize": 384,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png"
        },
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2
    },
    "tilesets": [
        {
            "bgcolor": "#1a1a1a",
            "north_direction": 0,
            "center": [
                80,
                96,
                192
            ],
            "last_rendertime": 1598331480,
            "name": "Daytime Render",
            "isOverlay": false,
            "spawn": [
                80,
                96,
                192
            ],
            "zoomLevels": 10,
            "base": "",
            "world": "Core01",
            "maxZoom": 10,
            "minZoom": 0,
            "showlocationmarker": true,
            "imgextension": "png",
            "poititle": "Markers",
            "defaultZoom": 1,
            "path": "day"
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "debug": true,
        "cacheTag": "1598331687",
        "controls": {
            "mapType": true,
            "coordsBox": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "overlays": true,
            "pan": true
        }
    }
};
