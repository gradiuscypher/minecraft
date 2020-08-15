var overviewerConfig = {
    "CONST": {
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
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
            "defaultMarker": "signpost.png",
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "queryMarker": "markers/marker_location.png",
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "tileSize": 384
    },
    "tilesets": [
        {
            "showlocationmarker": true,
            "base": "",
            "maxZoom": 10,
            "center": [
                80,
                96,
                192
            ],
            "last_rendertime": 1597507080,
            "imgextension": "png",
            "path": "day",
            "spawn": [
                80,
                96,
                192
            ],
            "poititle": "Markers",
            "zoomLevels": 10,
            "bgcolor": "#1a1a1a",
            "north_direction": 0,
            "defaultZoom": 1,
            "name": "Daytime Render",
            "world": "Core01",
            "minZoom": 0,
            "isOverlay": false
        }
    ],
    "worlds": [
        "Core01"
    ],
    "map": {
        "debug": true,
        "north_direction": "lower-left",
        "controls": {
            "overlays": true,
            "coordsBox": true,
            "zoom": true,
            "mapType": true,
            "pan": true,
            "compass": true,
            "spawn": true
        },
        "cacheTag": "1597507283"
    }
};
