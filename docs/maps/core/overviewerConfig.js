var overviewerConfig = {
    "map": {
        "controls": {
            "pan": true,
            "coordsBox": true,
            "overlays": true,
            "mapType": true,
            "compass": true,
            "spawn": true,
            "zoom": true
        },
        "cacheTag": "1596780082",
        "north_direction": "lower-left",
        "debug": true
    },
    "tilesets": [
        {
            "center": [
                80,
                96,
                192
            ],
            "defaultZoom": 1,
            "path": "day",
            "showlocationmarker": true,
            "poititle": "Markers",
            "base": "",
            "spawn": [
                80,
                96,
                192
            ],
            "name": "Daytime Render",
            "world": "Core01",
            "imgextension": "png",
            "bgcolor": "#1a1a1a",
            "north_direction": 0,
            "maxZoom": 10,
            "zoomLevels": 10,
            "isOverlay": false,
            "last_rendertime": 1596779880,
            "minZoom": 0
        }
    ],
    "worlds": [
        "Core01"
    ],
    "CONST": {
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "image": {
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "bedMarker": "bed.png"
        },
        "LOWERLEFT": 3,
        "mapDivId": "mcmap"
    }
};
