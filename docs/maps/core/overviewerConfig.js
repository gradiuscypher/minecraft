var overviewerConfig = {
    "CONST": {
        "UPPERLEFT": 0,
        "mapDivId": "mcmap",
        "LOWERRIGHT": 2,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png"
        },
        "tileSize": 384,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "showlocationmarker": true,
            "imgextension": "png",
            "maxZoom": 10,
            "path": "day",
            "bgcolor": "#1a1a1a",
            "world": "Core01",
            "poititle": "Markers",
            "minZoom": 0,
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
            "zoomLevels": 10,
            "base": "",
            "defaultZoom": 1,
            "last_rendertime": 1597953480,
            "name": "Daytime Render",
            "isOverlay": false,
            "north_direction": 0
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "spawn": true,
            "pan": true,
            "coordsBox": true,
            "compass": true,
            "zoom": true,
            "overlays": true,
            "mapType": true
        },
        "debug": true,
        "cacheTag": "1597953684"
    }
};
