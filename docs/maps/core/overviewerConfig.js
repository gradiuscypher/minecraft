var overviewerConfig = {
    "CONST": {
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "image": {
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker2x": "markers/marker_location_2x.png"
        },
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "UPPERLEFT": 0
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "name": "Daytime Render",
            "maxZoom": 9,
            "spawn": [
                80,
                96,
                192
            ],
            "world": "Core01",
            "defaultZoom": 1,
            "zoomLevels": 9,
            "base": "",
            "minZoom": 0,
            "poititle": "Markers",
            "imgextension": "png",
            "showlocationmarker": true,
            "bgcolor": "#1a1a1a",
            "center": [
                80,
                96,
                192
            ],
            "isOverlay": false,
            "last_rendertime": 1595375880,
            "north_direction": 0,
            "path": "day"
        }
    ],
    "map": {
        "debug": true,
        "north_direction": "lower-left",
        "cacheTag": "1595376080",
        "controls": {
            "overlays": true,
            "coordsBox": true,
            "compass": true,
            "spawn": true,
            "mapType": true,
            "zoom": true,
            "pan": true
        }
    }
};
