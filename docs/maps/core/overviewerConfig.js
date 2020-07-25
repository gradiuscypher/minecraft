var overviewerConfig = {
    "worlds": [
        "Core01"
    ],
    "CONST": {
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2,
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "image": {
            "signMarker": "signpost_icon.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png"
        },
        "mapDivId": "mcmap",
        "tileSize": 384
    },
    "tilesets": [
        {
            "center": [
                80,
                96,
                192
            ],
            "north_direction": 0,
            "spawn": [
                80,
                96,
                192
            ],
            "world": "Core01",
            "maxZoom": 9,
            "isOverlay": false,
            "base": "",
            "poititle": "Markers",
            "zoomLevels": 9,
            "name": "Daytime Render",
            "path": "day",
            "showlocationmarker": true,
            "imgextension": "png",
            "minZoom": 0,
            "bgcolor": "#1a1a1a",
            "defaultZoom": 1,
            "last_rendertime": 1595696280
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "debug": true,
        "controls": {
            "compass": true,
            "spawn": true,
            "overlays": true,
            "coordsBox": true,
            "mapType": true,
            "zoom": true,
            "pan": true
        },
        "cacheTag": "1595696483"
    }
};
