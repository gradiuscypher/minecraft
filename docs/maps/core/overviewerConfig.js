var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "spawnMarker": "markers/marker_home.png",
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3
    },
    "tilesets": [
        {
            "showlocationmarker": true,
            "world": "Core01",
            "imgextension": "png",
            "zoomLevels": 10,
            "spawn": [
                80,
                96,
                192
            ],
            "defaultZoom": 1,
            "center": [
                80,
                96,
                192
            ],
            "isOverlay": false,
            "poititle": "Markers",
            "base": "",
            "bgcolor": "#1a1a1a",
            "name": "Daytime Render",
            "minZoom": 0,
            "north_direction": 0,
            "path": "day",
            "last_rendertime": 1597816680,
            "maxZoom": 10
        }
    ],
    "worlds": [
        "Core01"
    ],
    "map": {
        "cacheTag": "1597816882",
        "controls": {
            "coordsBox": true,
            "zoom": true,
            "compass": true,
            "spawn": true,
            "mapType": true,
            "overlays": true,
            "pan": true
        },
        "debug": true,
        "north_direction": "lower-left"
    }
};
