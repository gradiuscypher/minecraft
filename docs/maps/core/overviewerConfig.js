var overviewerConfig = {
    "tilesets": [
        {
            "path": "day",
            "defaultZoom": 1,
            "zoomLevels": 9,
            "imgextension": "png",
            "showlocationmarker": true,
            "maxZoom": 9,
            "bgcolor": "#1a1a1a",
            "spawn": [
                80,
                96,
                192
            ],
            "north_direction": 0,
            "minZoom": 0,
            "base": "",
            "world": "Core01",
            "center": [
                80,
                96,
                192
            ],
            "poititle": "Markers",
            "name": "Daytime Render",
            "last_rendertime": 1595717971,
            "isOverlay": false
        }
    ],
    "worlds": [
        "Core01"
    ],
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "spawn": true,
            "compass": true,
            "zoom": true,
            "overlays": true,
            "mapType": true,
            "coordsBox": true,
            "pan": true
        },
        "cacheTag": "1595718377",
        "debug": true
    },
    "CONST": {
        "LOWERRIGHT": 2,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker2x": "markers/marker_location_2x.png"
        },
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "mapDivId": "mcmap",
        "LOWERLEFT": 3,
        "UPPERLEFT": 0
    }
};
