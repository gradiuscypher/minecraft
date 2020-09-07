var overviewerConfig = {
    "CONST": {
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0,
        "mapDivId": "mcmap",
        "image": {
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png"
        },
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "LOWERLEFT": 3
    },
    "tilesets": [
        {
            "maxZoom": 10,
            "imgextension": "png",
            "spawn": [
                80,
                96,
                192
            ],
            "base": "",
            "minZoom": 0,
            "showlocationmarker": true,
            "center": [
                80,
                96,
                192
            ],
            "poititle": "Markers",
            "isOverlay": false,
            "path": "day",
            "north_direction": 0,
            "bgcolor": "#1a1a1a",
            "zoomLevels": 10,
            "last_rendertime": 1599461880,
            "name": "Daytime Render",
            "world": "Core01",
            "defaultZoom": 1
        }
    ],
    "worlds": [
        "Core01"
    ],
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "compass": true,
            "coordsBox": true,
            "overlays": true,
            "spawn": true,
            "mapType": true,
            "zoom": true,
            "pan": true
        },
        "cacheTag": "1599462087",
        "debug": true
    }
};
