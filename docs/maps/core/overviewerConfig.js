var overviewerConfig = {
    "tilesets": [
        {
            "path": "day",
            "spawn": [
                80,
                96,
                192
            ],
            "imgextension": "png",
            "center": [
                80,
                96,
                192
            ],
            "showlocationmarker": true,
            "zoomLevels": 9,
            "name": "Daytime Render",
            "maxZoom": 9,
            "minZoom": 0,
            "world": "Core01",
            "poititle": "Markers",
            "isOverlay": false,
            "base": "",
            "north_direction": 0,
            "bgcolor": "#1a1a1a",
            "last_rendertime": 1594861079,
            "defaultZoom": 1
        }
    ],
    "worlds": [
        "Core01"
    ],
    "CONST": {
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "tileSize": 384,
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png"
        }
    },
    "map": {
        "debug": true,
        "controls": {
            "zoom": true,
            "compass": true,
            "spawn": true,
            "pan": true,
            "coordsBox": true,
            "overlays": true,
            "mapType": true
        },
        "north_direction": "lower-left",
        "cacheTag": "1594861280"
    }
};
