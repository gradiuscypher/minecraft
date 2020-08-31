var overviewerConfig = {
    "worlds": [
        "Core01"
    ],
    "CONST": {
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "tileSize": 384,
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
            "bedMarker": "bed.png",
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png"
        },
        "LOWERRIGHT": 2
    },
    "tilesets": [
        {
            "north_direction": 0,
            "imgextension": "png",
            "defaultZoom": 1,
            "center": [
                80,
                96,
                192
            ],
            "world": "Core01",
            "spawn": [
                80,
                96,
                192
            ],
            "poititle": "Markers",
            "showlocationmarker": true,
            "path": "day",
            "maxZoom": 10,
            "minZoom": 0,
            "name": "Daytime Render",
            "last_rendertime": 1598831880,
            "bgcolor": "#1a1a1a",
            "base": "",
            "zoomLevels": 10,
            "isOverlay": false
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "cacheTag": "1598832085",
        "debug": true,
        "controls": {
            "pan": true,
            "coordsBox": true,
            "compass": true,
            "mapType": true,
            "zoom": true,
            "spawn": true,
            "overlays": true
        }
    }
};
