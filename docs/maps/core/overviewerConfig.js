var overviewerConfig = {
    "tilesets": [
        {
            "path": "day",
            "name": "Daytime Render",
            "zoomLevels": 10,
            "maxZoom": 10,
            "last_rendertime": 1599119880,
            "north_direction": 0,
            "isOverlay": false,
            "spawn": [
                80,
                96,
                192
            ],
            "world": "Core01",
            "imgextension": "png",
            "showlocationmarker": true,
            "poititle": "Markers",
            "minZoom": 0,
            "defaultZoom": 1,
            "base": "",
            "center": [
                80,
                96,
                192
            ],
            "bgcolor": "#1a1a1a"
        }
    ],
    "map": {
        "controls": {
            "mapType": true,
            "overlays": true,
            "spawn": true,
            "compass": true,
            "coordsBox": true,
            "pan": true,
            "zoom": true
        },
        "north_direction": "lower-left",
        "cacheTag": "1599120084",
        "debug": true
    },
    "worlds": [
        "Core01"
    ],
    "CONST": {
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "image": {
            "signMarker": "signpost_icon.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png",
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "UPPERLEFT": 0
    }
};
