var overviewerConfig = {
    "CONST": {
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "LOWERRIGHT": 2,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "defaultMarker": "signpost.png"
        },
        "mapDivId": "mcmap"
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "defaultZoom": 1,
            "north_direction": 0,
            "path": "day",
            "bgcolor": "#1a1a1a",
            "imgextension": "png",
            "base": "",
            "center": [
                80,
                96,
                192
            ],
            "world": "Core01",
            "poititle": "Markers",
            "showlocationmarker": true,
            "spawn": [
                80,
                96,
                192
            ],
            "maxZoom": 10,
            "zoomLevels": 10,
            "name": "Daytime Render",
            "minZoom": 0,
            "last_rendertime": 1597139880,
            "isOverlay": false
        }
    ],
    "map": {
        "controls": {
            "overlays": true,
            "mapType": true,
            "pan": true,
            "spawn": true,
            "coordsBox": true,
            "compass": true,
            "zoom": true
        },
        "debug": true,
        "north_direction": "lower-left",
        "cacheTag": "1597140082"
    }
};
