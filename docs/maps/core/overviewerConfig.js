var overviewerConfig = {
    "CONST": {
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker2x": "markers/marker_location_2x.png"
        },
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "mapDivId": "mcmap"
    },
    "tilesets": [
        {
            "center": [
                80,
                96,
                192
            ],
            "world": "Core01",
            "base": "",
            "minZoom": 0,
            "zoomLevels": 10,
            "imgextension": "png",
            "path": "day",
            "showlocationmarker": true,
            "last_rendertime": 1598936280,
            "defaultZoom": 1,
            "north_direction": 0,
            "poititle": "Markers",
            "spawn": [
                80,
                96,
                192
            ],
            "bgcolor": "#1a1a1a",
            "name": "Daytime Render",
            "maxZoom": 10,
            "isOverlay": false
        }
    ],
    "map": {
        "debug": true,
        "north_direction": "lower-left",
        "cacheTag": "1598936487",
        "controls": {
            "mapType": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "pan": true,
            "overlays": true,
            "coordsBox": true
        }
    },
    "worlds": [
        "Core01"
    ]
};
