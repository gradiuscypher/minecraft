var overviewerConfig = {
    "CONST": {
        "image": {
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "signMarker": "signpost_icon.png",
            "spawnMarker": "markers/marker_home.png"
        },
        "tileSize": 384,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2
    },
    "tilesets": [
        {
            "base": "",
            "center": [
                80,
                96,
                192
            ],
            "name": "Daytime Render",
            "last_rendertime": 1596761880,
            "path": "day",
            "zoomLevels": 10,
            "minZoom": 0,
            "isOverlay": false,
            "defaultZoom": 1,
            "north_direction": 0,
            "poititle": "Markers",
            "showlocationmarker": true,
            "imgextension": "png",
            "world": "Core01",
            "spawn": [
                80,
                96,
                192
            ],
            "bgcolor": "#1a1a1a",
            "maxZoom": 10
        }
    ],
    "worlds": [
        "Core01"
    ],
    "map": {
        "controls": {
            "zoom": true,
            "coordsBox": true,
            "pan": true,
            "overlays": true,
            "spawn": true,
            "compass": true,
            "mapType": true
        },
        "debug": true,
        "north_direction": "lower-left",
        "cacheTag": "1596762083"
    }
};
