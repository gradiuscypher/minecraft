var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "LOWERRIGHT": 2,
        "image": {
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png"
        },
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0,
        "LOWERLEFT": 3
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "bgcolor": "#1a1a1a",
            "showlocationmarker": true,
            "base": "",
            "poititle": "Markers",
            "name": "Daytime Render",
            "isOverlay": false,
            "defaultZoom": 1,
            "last_rendertime": 1595606280,
            "path": "day",
            "zoomLevels": 9,
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
            "minZoom": 0,
            "world": "Core01",
            "north_direction": 0,
            "imgextension": "png",
            "maxZoom": 9
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "overlays": true,
            "mapType": true,
            "compass": true,
            "coordsBox": true,
            "zoom": true,
            "pan": true,
            "spawn": true
        },
        "cacheTag": "1595606481",
        "debug": true
    }
};
