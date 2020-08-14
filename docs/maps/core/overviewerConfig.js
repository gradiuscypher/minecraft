var overviewerConfig = {
    "map": {
        "controls": {
            "pan": true,
            "compass": true,
            "mapType": true,
            "spawn": true,
            "coordsBox": true,
            "overlays": true,
            "zoom": true
        },
        "debug": true,
        "north_direction": "lower-left",
        "cacheTag": "1597399282"
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "path": "day",
            "isOverlay": false,
            "showlocationmarker": true,
            "defaultZoom": 1,
            "center": [
                80,
                96,
                192
            ],
            "poititle": "Markers",
            "spawn": [
                80,
                96,
                192
            ],
            "zoomLevels": 10,
            "name": "Daytime Render",
            "world": "Core01",
            "north_direction": 0,
            "last_rendertime": 1597399080,
            "bgcolor": "#1a1a1a",
            "base": "",
            "maxZoom": 10,
            "minZoom": 0,
            "imgextension": "png"
        }
    ],
    "CONST": {
        "UPPERLEFT": 0,
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png"
        },
        "LOWERRIGHT": 2
    }
};
