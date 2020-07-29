var overviewerConfig = {
    "tilesets": [
        {
            "name": "Daytime Render",
            "poititle": "Markers",
            "isOverlay": false,
            "imgextension": "png",
            "path": "day",
            "bgcolor": "#1a1a1a",
            "north_direction": 0,
            "world": "Core01",
            "spawn": [
                80,
                96,
                192
            ],
            "defaultZoom": 1,
            "last_rendertime": 1596059880,
            "showlocationmarker": true,
            "minZoom": 0,
            "base": "",
            "zoomLevels": 10,
            "center": [
                80,
                96,
                192
            ],
            "maxZoom": 10
        }
    ],
    "worlds": [
        "Core01"
    ],
    "map": {
        "controls": {
            "pan": true,
            "compass": true,
            "spawn": true,
            "zoom": true,
            "coordsBox": true,
            "overlays": true,
            "mapType": true
        },
        "north_direction": "lower-left",
        "cacheTag": "1596060082",
        "debug": true
    },
    "CONST": {
        "tileSize": 384,
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png"
        }
    }
};
