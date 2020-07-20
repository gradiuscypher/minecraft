var overviewerConfig = {
    "CONST": {
        "image": {
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png"
        },
        "UPPERLEFT": 0,
        "mapDivId": "mcmap",
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "tileSize": 384,
        "UPPERRIGHT": 1
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "imgextension": "png",
            "showlocationmarker": true,
            "bgcolor": "#1a1a1a",
            "path": "day",
            "defaultZoom": 1,
            "minZoom": 0,
            "base": "",
            "center": [
                80,
                96,
                192
            ],
            "world": "Core01",
            "isOverlay": false,
            "north_direction": 0,
            "poititle": "Markers",
            "maxZoom": 9,
            "name": "Daytime Render",
            "zoomLevels": 9,
            "spawn": [
                80,
                96,
                192
            ],
            "last_rendertime": 1595213880
        }
    ],
    "map": {
        "controls": {
            "mapType": true,
            "compass": true,
            "coordsBox": true,
            "zoom": true,
            "spawn": true,
            "pan": true,
            "overlays": true
        },
        "debug": true,
        "cacheTag": "1595214081",
        "north_direction": "lower-left"
    }
};
