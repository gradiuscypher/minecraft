var overviewerConfig = {
    "CONST": {
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "LOWERLEFT": 3,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1
    },
    "tilesets": [
        {
            "poititle": "Markers",
            "path": "day",
            "last_rendertime": 1598284680,
            "maxZoom": 10,
            "zoomLevels": 10,
            "base": "",
            "world": "Core01",
            "defaultZoom": 1,
            "imgextension": "png",
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
            "north_direction": 0,
            "showlocationmarker": true,
            "bgcolor": "#1a1a1a",
            "minZoom": 0,
            "isOverlay": false
        }
    ],
    "worlds": [
        "Core01"
    ],
    "map": {
        "cacheTag": "1598284887",
        "controls": {
            "compass": true,
            "mapType": true,
            "zoom": true,
            "overlays": true,
            "pan": true,
            "spawn": true,
            "coordsBox": true
        },
        "north_direction": "lower-left",
        "debug": true
    }
};
