var overviewerConfig = {
    "CONST": {
        "image": {
            "spawnMarker": "markers/marker_home.png",
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png",
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png"
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "tileSize": 384,
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "path": "day",
            "world": "Core01",
            "isOverlay": false,
            "maxZoom": 9,
            "base": "",
            "defaultZoom": 1,
            "spawn": [
                80,
                96,
                192
            ],
            "last_rendertime": 1595264280,
            "north_direction": 0,
            "minZoom": 0,
            "showlocationmarker": true,
            "name": "Daytime Render",
            "center": [
                80,
                96,
                192
            ],
            "bgcolor": "#1a1a1a",
            "poititle": "Markers",
            "zoomLevels": 9,
            "imgextension": "png"
        }
    ],
    "map": {
        "controls": {
            "overlays": true,
            "mapType": true,
            "pan": true,
            "coordsBox": true,
            "spawn": true,
            "zoom": true,
            "compass": true
        },
        "debug": true,
        "cacheTag": "1595264486",
        "north_direction": "lower-left"
    }
};
