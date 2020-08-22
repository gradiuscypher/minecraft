var overviewerConfig = {
    "map": {
        "debug": true,
        "cacheTag": "1598133685",
        "controls": {
            "zoom": true,
            "overlays": true,
            "pan": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "coordsBox": true
        },
        "north_direction": "lower-left"
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "poititle": "Markers",
            "imgextension": "png",
            "center": [
                80,
                96,
                192
            ],
            "showlocationmarker": true,
            "bgcolor": "#1a1a1a",
            "defaultZoom": 1,
            "zoomLevels": 10,
            "maxZoom": 10,
            "isOverlay": false,
            "minZoom": 0,
            "base": "",
            "north_direction": 0,
            "world": "Core01",
            "path": "day",
            "name": "Daytime Render",
            "spawn": [
                80,
                96,
                192
            ],
            "last_rendertime": 1598133480
        }
    ],
    "CONST": {
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "tileSize": 384,
        "image": {
            "spawnMarker2x": "markers/marker_home_2x.png",
            "bedMarker": "bed.png",
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png"
        },
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1
    }
};
