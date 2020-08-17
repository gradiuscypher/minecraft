var overviewerConfig = {
    "CONST": {
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "UPPERRIGHT": 1,
        "mapDivId": "mcmap"
    },
    "map": {
        "north_direction": "lower-left",
        "debug": true,
        "cacheTag": "1597687364",
        "controls": {
            "overlays": true,
            "zoom": true,
            "mapType": true,
            "pan": true,
            "spawn": true,
            "compass": true,
            "coordsBox": true
        }
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "showlocationmarker": true,
            "poititle": "Markers",
            "bgcolor": "#1a1a1a",
            "name": "Daytime Render",
            "imgextension": "png",
            "north_direction": 0,
            "path": "day",
            "defaultZoom": 1,
            "maxZoom": 8,
            "world": "world",
            "last_rendertime": 1597686979,
            "minZoom": 0,
            "base": "",
            "spawn": [
                3,
                80,
                12
            ],
            "isOverlay": false,
            "center": [
                3,
                80,
                12
            ],
            "zoomLevels": 8
        }
    ]
};
